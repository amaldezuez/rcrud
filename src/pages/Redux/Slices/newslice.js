import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const newsSlice=createSlice({
    name:"news",
    initialState:{
        user:[]
    },
    reducers:{
        addnews:(state,action)=>{
            const {head,Thumb,place,des}=action.payload
            if(!head || !Thumb || !place || !des){
                toast.warning('Ented Valid Inputs')
            }else{
                console.log(action)
                state.user.push(action.payload)
                toast.success("Added Successfully")
            }
          
        },
        deletenews:(state,action)=>{
            state.user=state.user.filter((item)=>item.id!==action.payload);
           toast.success('Deleted Successfully')

        },
        update:(state,action)=>{
           const {id,head,Thumb,place,des}=action.payload
           const uu=state.user.find(item=>item.id==id)
           if(uu){
            uu.head=head;
            uu.Thumb=Thumb;
            uu.place=place;
            uu.des=des;
            toast.success('Updated Successfully')

           }
        }

    }

})
export const {addnews,deletenews,update}=newsSlice.actions
export default newsSlice.reducer