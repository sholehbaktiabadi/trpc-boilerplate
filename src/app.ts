import variable from "./config/variable";
import { router, publicProcedure } from "./service/trpc";
import { createHTTPServer } from '@trpc/server/adapters/standalone'

const appRouter = router({
    userList: publicProcedure.query(async () => {
        const x = 'Holla everyone'
        return x
    })
})

const server = createHTTPServer({
    router: appRouter
})

server.listen(variable.APP_PORT)
console.log(variable.APP_PORT)