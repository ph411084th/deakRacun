import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const testRouter = createTRPCRouter({
    test: publicProcedure.input(z.string())
    .query(async({input}) => {
        return "Hello World" + input;
    })
})