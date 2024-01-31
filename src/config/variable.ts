import { config } from 'dotenv'
config()

export const Variables = () => ({
    APP_PORT: +process.env.APP_PORT
})

export default Variables()
