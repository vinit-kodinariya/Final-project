const { coachService } = require("../services")

const createCoach = async (req, res) => {
    try {
        const reqBody = req.body
        const coach = await coachService.createCoach(reqBody);
        if (!coach) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "coach create successfully!",
            data: { coach }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listCoach = async (req, res) => {
    try {
        const coach = await coachService.listCoach();

        if (!coach) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "coach List Successfully!",
            data: { coach }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteCoach = async (req, res) => {
    try {
        const id = req.params.Id
        const coach = await coachService.listCoach();
        if (!coach) {
            throw new Error("Please Providde UserId!");
        };
        await coachService.deleteCoach(id)

        res.status(200).json({
            success: true,
            message: "coach Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateCoach = async (req, res) => {
    try {
        const id = req.params.id;
        const coach = await coachService.getId(id);
        if (!coach) {
            throw new Error ("Mobile not found!")
        }
        await coachService.updateCoach(id,req.body)
        res.status(200).json({
            success : true,
            message : "coach Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createCoach, listCoach, deleteCoach, updateCoach }