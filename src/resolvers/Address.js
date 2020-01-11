function resident(parent,args,context,info) {
    return context.prisma.user({id: args.id})
}
module.exports = {
    resident
}