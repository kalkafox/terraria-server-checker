import { z } from 'zod'
import { procedure, router } from '@/server/trpc'

import net from 'net'

let status = '⏳'

export const appRouter = router({
  getServerStatus: procedure.query(() => {
    const client = new net.Socket()

    client.connect({ port: 7777, host: '74.91.121.157' }, () => {
      client.destroy()
      status = '✅'
    })

    client.on('data', () => {
      client.destroy()
    })

    client.on('error', () => {
      client.destroy()
      status = '❌'
    })

    return status
  }),
})
// export type definition of API
export type AppRouter = typeof appRouter
