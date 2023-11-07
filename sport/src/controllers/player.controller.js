const { playerService } = require("../services")

const createPlayer = async (req, res) => {
    try {
        const reqBody = req.body

        if (req.file) {
            reqBody.Player_photo = req.file.filename;
        } else {
            throw new Error("Product image is required!");
        }

        const player = await playerService.createPlayer(reqBody);
        if (!player) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "player create successfully!",
            data: { player }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listPlayer = async (req, res) => {
    try {
        const player = await playerService.listPlayer();

        if (!player) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "player List Successfully!",
            data: { player }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deletePlayer = async (req, res) => {
    try {
        const id = req.params.Id
        const player = await playerService.listPlayer();
        if (!player) {
            throw new Error("Please Providde UserId!");
        };
        await playerService.deletePlayer(id)

        res.status(200).json({
            success: true,
            message: "player Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updatePlayer = async (req, res) => {
    try {
        const id = req.params.id;
        const player = await playerService.getId(id);
        if (!player) {
            throw new Error("Mobile not found!")
        }
        await playerService.updatePlayer(id, req.body)
        res.status(200).json({
            success: true,
            message: "player Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createPlayer, listPlayer, deletePlayer, updatePlayer }