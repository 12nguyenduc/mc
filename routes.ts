import { Context } from "https://deno.land/x/oak/mod.ts";
import { makeJwt, setExpiration } from "https://deno.land/x/djwt/create.ts";
import key from './key.ts';
import DBUser from "./db.ts";
import users from "./users.ts";

export const login = async (ctx: Context)=>{
    const { value } = await ctx.request.body();
    console.log(await DBUser.select('*').where(DBUser.fields.phone, '0898572528').get());
    for(const user of users){
        if(value.username === user.username && value.password === user.password){
            const header = {
                alg: "HS256" as const,
                crit: ["dummy"],
                dummy: 100,
            };
            const payload = {
                iss: user.username,
                jti: "#@DUCNV",
                exp: setExpiration(new Date().getTime() + 20000),
            };

            const jwt = makeJwt({ header, payload, key });
            if(jwt){
                ctx.response.status = 200;
                ctx.response.body = {
                    code: 0,
                    data: {
                        id: user.id,
                        username: user.username,
                        token: jwt
                    }
                }
            }else{
                ctx.response.status = 500;
                ctx.response.body = {
                    code: 1,
                    message: `Internal server error`
                }
            }

            return;
        }
    }
    ctx.response.status = 422;
    ctx.response.body = {
        code: 1,
        message: `user don't exist`
    }
};

export const guest = (ctx: Context)=>{
    ctx.response.body = 'Guest'
}

export const auth =  (ctx: Context)=>{
    ctx.response.body = 'Auth'
}
