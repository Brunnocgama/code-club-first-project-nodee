
const express = require ('express')
const PORT = 3000
const app = express()
const uuid = require ('uuid') 

app.use(express.json())

const orders = []

const orderForId = (request, response, next) => {
    const { id } = request.params
    const index = orders.findIndex(requestPerUser => requestPerUser.id === id)
    if (index < 0) {

        return response.status(404).json({ message: "Order not found" })
    }
    request.orderIndex = index
    request.orderId = id

    next()
}

const checkOrderStatus = (request, response, next) => {
    const method = request.method
    const url = request.url
    console.log(`{${method}} - ${url}`)
    next()
}

app.get('/order',checkOrderStatus, (request, response) => {
    return response.json(orders)
})
app.get('/order/:id/',orderForId,checkOrderStatus, (request, response) => {
    const index = request.orderIndex
    const order = orders[index]
    return response.status(200).json(order)
})

app.post('/order',checkOrderStatus, (request, response) => {
    const { newOrder, clientName, price } = request.body

    const requestPerUser = { id: uuid.v4(), newOrder, clientName, price, status: "Em preparação" }

    orders.push(requestPerUser)

    return response.status(201).json(requestPerUser)

})

app.put('/order/:id',orderForId,checkOrderStatus, (request, response) => {
    const { newOrder, clientName, price } = request.body
    const index = request.orderIndex
    const id = request.orderId

    const updatedOrder = { id, newOrder, clientName, price, status: "Em preparação" }

    orders[index] = updatedOrder

    return response.json(updatedOrder)
})

app.delete('/order/:id',orderForId,checkOrderStatus, (request, response) => {
   
    const index = request.orderIndex

    orders.splice(index, 1)

    return response.status(204).json()

})

app.patch('/order/:id',orderForId,checkOrderStatus, (request, response) => {
    const index = request.orderIndex

    orders[index].status = "Pronto"

    const concluded = orders[index]

    return response.json(concluded)
})

app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT} 🚀 `)
})

