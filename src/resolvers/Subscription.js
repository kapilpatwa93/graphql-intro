function newLinkSubscribe(parent, args, context, info) {

    console.log("here");
    return context.prisma.$subscribe.link({mutation_in:['CREATED']}).node()
}

const newLink = {
    subscribe: newLinkSubscribe,
    resolve: payload => {
        console.log("inside resolve");
        return payload
    }
};
module.exports = {
    newLink,
};