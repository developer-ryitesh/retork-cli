import HttpClient from "@/libs/interceptors";
import PlaceHolderRepository from "../repositories/placeholder.repository";
import { createSlice } from "@reduxjs/toolkit";
import type { IBuilder, IService } from "@/libs/redux/types";

const initialState = {};

class PlaceHolderService implements IService {
   constructor(private _placeHolderRepository: PlaceHolderRepository) {}

   private slice = createSlice({
      name: "PlaceHolderService",
      initialState,
      reducers: {},
      extraReducers: (builder) => {},
   });
   reducer = this.slice.reducer;
   actions = this.slice.actions;
}

/*---------[di container]--------*/
const container = new PlaceHolderService(new PlaceHolderRepository(new HttpClient()));
export const placeHolderActions = container.actions;
export const placeHolderReducer = container.reducer;
export const placeHolderService = container as Omit<typeof container, "reducer" | "actions">;
