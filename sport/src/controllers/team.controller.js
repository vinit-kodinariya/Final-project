const { teamService } = require("../services")

const createTeam = async (req, res) => {
    try {
        const reqBody = req.body
        const team = await teamService.createTeam(reqBody);
        if (!team) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "team create successfully!",
            data: { team }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listTeam = async (req, res) => {
    try {
        const team = await teamService.listTeam();

        if (!team) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "team List Successfully!",
            data: { team }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }``
};

const deleteTeam = async (req, res) => {
    try {
        const id = req.params.Id
        const team = await teamService.listTeam();
        if (!team) {
            throw new Error("Please Providde UserId!");
        };
        await teamService.deleteTeam(id)

        res.status(200).json({
            success: true,
            message: "team Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateTeam = async (req, res) => {
    try {
        const id = req.params.id;
        const team = await teamService.getId(id);
        if (!team) {
            throw new Error ("team not found!")
        }
        await teamService.updateTeam(id,req.body)
        res.status(200).json({
            success : true,
            message : "team Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createTeam, listTeam, deleteTeam, updateTeam }