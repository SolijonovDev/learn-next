import React from "react"

export interface ILayout{
    children:React.ReactNode;
    title:string | null;
    footer?:boolean;
}