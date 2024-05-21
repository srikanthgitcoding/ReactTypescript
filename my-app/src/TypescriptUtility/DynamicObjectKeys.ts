//1) using index signature

import { unknown } from "zod";

interface Way1<T>{
    readonly [key:string] : T
}

const userScores: Way1<number> = {
    alice: 100,
    bob: 120,
    carol: 90,
  };

//2 record utility type 

type way2 = Record<string,unknown>
const userScores1: way2 = {
    alice: 100,
    bob: 120,
    carol: 90,
  };

//3 using mapped types 
// Using Mapped Types
// Mapped types are a powerful feature that allows you to create new types based on existing ones, transforming their properties as needed. They can be used to create objects with dynamic keys by iterating over a union of key types and mapping them to a specific value type.

type allowedkeys = "cancel" | "sucess" | "pending"

type way3<T> = {[key in allowedkeys]: T}

const userAges: way3<number> = {
    cancel: 30,
    sucess: 35,
    pending: 25,
  };

type mappedType42<T extends number,K> = {[k in T]:K}
type mapRecord = Record<number,string>
const mapRecor:mapRecord = {1:""}
const map42:mappedType42<number,string> ={}

//4   4,  Manipulating Objects with Dynamic Keys
//5,  Accessing Nested Objects with Dynamic Keys

interface way5<T>{
    readonly [k:string]: T | way5<T>
}

const userPreferences:way5<string> = {
    alice: {
      theme: "dark",
      language: "en",
    },
    bob: {
      theme: "light",
      language: "es",
    },
    test:""
  };


 type nestedRecordType = Record<string,Record<string,unknown>| string>

  const producst1111:nestedRecordType ={
    name:{
        fname:"",
        lName:""
    }
  }


// nested mapped types 

type mappedType1 = {[k in allowedkeys]:Record<string,unknown>}
type mappedType2 = {[k in allowedkeys]:Record<string,unknown> | string}
type mappedType3 = {[k in allowedkeys]:{[key:string]:unknown } | string}
type mappedType4<T extends number,K> = {[k in T]:K}

const map4:mappedType4<number,string> ={12:""}






   

