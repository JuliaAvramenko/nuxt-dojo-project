// export default defineEventHandler(() => {

//     return {
//         message: `Hello, ninjas`
//     }
// })

// import { getQuery } from 'h3';

// export default defineEventHandler(async (event) => {
//     // handle query params
//     const { name } = getQuery(event)

//     //handle post data
//     const { age } = await readBody(event)

//     //api call with private key
//     const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_VDPm8dv5Q5Y4vkblzdYkHBalpaHanvz4MSuQBlPz')
//     return {
//         message: `Hello, ${name}! You are ${age} years old`
//     }
// })

export default defineEventHandler(async (event) => {

    //api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_VDPm8dv5Q5Y4vkblzdYkHBalpaHanvz4MSuQBlPz')
    return data
})