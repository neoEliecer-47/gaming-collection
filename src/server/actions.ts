"use server";

import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import z from 'zod'
import { createSession, deleteSession } from './sessions';
import { redirect } from 'next/navigation';

const SECRET = process.env.JWT_SECRET || 'secret_key'

const testUser = {
  
  id: "1",
  email: 'eliecer.sanchez47@gmail.com',
  password: '12345678',
}

const userSchema = z.object({
  
  email: z.string().email({ message: 'Invalid email address.' }).trim(),
  password: z.string().min(8, {message: 'Password must be at least 8 characters long.' }),
  
})


export async function loginUser(prevState: any, formData: FormData){
  console.log(formData)
  const rawData = Object.fromEntries(formData.entries());
  console.log('rawdata', rawData)
  const result = userSchema.safeParse(rawData)
  console.log('result: ',result)
  if(!result.success){
    console.log('here at actions')
    return { errors: result.error.flatten().fieldErrors }
  }
  const { password, email } = result.data
  if(email !== testUser.email || password !== testUser.password){
    return { errors: { email: ['invalid email'], password: ['error password'] } }
  }
  console.log('HEREEEEEEEEEEEEEEEEEEE')
  await createSession(testUser.id.toString())

  redirect('/user')
}

export async function logoutUser(){
  await deleteSession()
}


export async function fetchCollections(page: number, collectionType: string) {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/${collectionType}?key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`,
      {
        //next: { revalidate: 60 }
        cache: "force-cache",
      }
    );

    const collectionData = await res.json();
    return {
      success: true,
      data: collectionData.results,
      isNextPage: collectionData.next,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error fetching ${collectionType} collection: ${error}`);
      return { success: false, error: error.message };
    }
  }
}

export async function fetchGamesByQuery(query: string) {
  try {
    const gamesSearched = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&search=${query}`,
      {
        cache: 'force-cache'
        //SSG instead of SSR
      }
    );

    const data = await gamesSearched.json();
    return { success: true, data: data.results, count: data.count };
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error fetching games by query: ${error}`);
      return { success: false, error: error.message };
    }
  }
}


export async function login(username: string, password: string) {
if(username !== "testuser" || password !== '123'){
  return { error: 'invalid credentials' }
}

//generate JWT
const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' })
;(await cookies()).set('token', token, { httpOnly: true, secure: true, path: '/' })

return { seccess: true }
}


export async function veryfyUser(){
  const token = (await cookies()).get('token')?.value

  if(!token){
    return { error: 'no token provided' }
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    return {  success: true, username: decoded }
  } catch (error) {
    console.log('here error middlewareee')
    console.log(error)
      return { error: 'invalid token' }
  }

}
