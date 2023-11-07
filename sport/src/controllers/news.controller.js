const { newsService } = require("../services")

const createNews = async (req, res) => {
    try {
        const reqBody = req.body
        const news = await newsService.createNews(reqBody);
        if (!news) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "news create successfully!",
            data: { news }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listNews = async (req, res) => {
    try {
        const news = await newsService.listNews();

        if (!news) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "news List Successfully!",
            data: { news }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteNews = async (req, res) => {
    try {
        const id = req.params.Id
        const news = await newsService.listNews();
        if (!news) {
            throw new Error("Please Providde UserId!");
        };
        await newsService.deleteNews(id)

        res.status(200).json({
            success: true,
            message: "news Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateNews = async (req, res) => {
    try {
        const id = req.params.id;
        const news = await newsService.getId(id);
        if (!news) {
            throw new Error ("Mobile not found!")
        }
        await newsService.updateNews(id,req.body)
        res.status(200).json({
            success : true,
            message : "news Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createNews, listNews, deleteNews, updateNews }