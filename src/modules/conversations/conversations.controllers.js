
const { Conversation, User, Participant } = require('../../models');

const createConversation = async (req, res, next) => {
    try {
       const { userId, participantId } = req.body;
       // creo la conversacion 
       const conversation = await Conversation.create({ createdBy: userId });
       // agregar a los participantes a la conversacion -> creandolos en la tabla pivote
       const user = await User.findByPk(userId);
       const participant = await User.findByPk(participantId);
       await conversation.addUser(user);
       await conversation.addUser(participant);
       res.status(201).end();
    } catch (error) {
        next(error)
    }
};

// poder manipular la tabla pivote

// @participantsId -> arreglo de Ids

const createGroupConversation = async(req, res, next) => {
try {
    // ? cuantos participantes se van a enviar cuando se crea el grupo
    const {userId, participantsIds, title} = req.body;
    const conversation = await Conversation.create({createdBy: userId, title, type: "group"});
    // necesitamos crear a los participantes en la tabla pivote
    // {UserId, ConversationId}
    const createParticipants = [...participantsIds, userId].map(participant => ({ConversationId: conversation.id, UserId: participant}));

    await Participant.bulkCreate(createParticipants);
    res.status(201).end();
    console.log(createParticipants);
} catch (error) {  
    next(error)
}
};

const getAllConversations = async (req, res, next) => {
    try {
        const {id} = req.params;

        const conversations = await Participant.findAll({
            where: {UserId: id},
            include: {
                model: Conversation,
                include: {
                    model: Participant,
                    attributes: ['UserId'],
                    include: {
                        model: User,
                        attributes: ["firstname", "lastname", "avatar"],
                    },
                },
            },
        });
        res.json(conversations)
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createConversation,
    createGroupConversation,
    getAllConversations,
};