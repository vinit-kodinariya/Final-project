const { userService } = require("../services")

const createUser = async (req, res) => {
    try {
        const reqBody = req.body
        const user = await userService.createUser(reqBody);
        if (!user) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "user create successfully!",
            data: { user }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listUser = async (req, res) => {
    try {
        const user = await userService.listUser();

        if (!user) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "user List Successfully!",
            data: { user }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.Id
        const user = await userService.listUser();
        if (!user) {
            throw new Error("Please Providde UserId!");
        };
        await userService.deleteUser(id)

        res.status(200).json({
            success: true,
            message: "user Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getId(id);
        if (!user) {
            throw new Error ("Mobile not found!")
        }
        await userService.updateUser(id,req.body)
        res.status(200).json({
            success : true,
            message : "user Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createUser, listUser, deleteUser, updateUser }