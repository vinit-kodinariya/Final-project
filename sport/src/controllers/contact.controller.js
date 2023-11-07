const { contactService } = require("../services")

const createContact = async (req, res) => {
    try {
        const reqBody = req.body
        const contact = await contactService.createContact(reqBody);
        if (!contact) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "contact create successfully!",
            data: { contact }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listContact = async (req, res) => {
    try {
        const contact = await contactService.listContact();

        if (!contact) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "contact List Successfully!",
            data: { contact }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteContact = async (req, res) => {
    try {
        const id = req.params.Id
        const contact = await contactService.listContact();
        if (!contact) {
            throw new Error("Please Providde UserId!");
        };
        await contactService.deleteContact(id)

        res.status(200).json({
            success: true,
            message: "contact Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateContact = async (req, res) => {
    try {
        const id = req.params.id;
        const contact = await contactService.getId(id);
        if (!contact) {
            throw new Error ("Mobile not found!")
        }
        await contactService.updateContact(id,req.body)
        res.status(200).json({
            success : true,
            message : "contact Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createContact, listContact, deleteContact, updateContact }