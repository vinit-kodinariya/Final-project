const {eventService} = require("../services");

const createEvent = async (req, res) => {
  try {

    const reqBody = req.body

    const Mobile = await eventService.createEvent(reqBody);
    if (!Mobile) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Mobile Successfully Create"),
      data: { Mobile }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getEvent = async (req, res) => {
  try {
    const Mobile = await eventService.getEvent();
    if (!Mobile) {
      throw new Error("mething wen twrong, please try again or later!")
    }
    res.status(200).json({
      success: true,
      message: ("Mobile Successfully Get"),
      data: { Mobile }
    })
  } catch (error) {
    res.status().json({ success: false, message: error.message })
  }
};


const deleteEvent = async (req, res) => {
  try {
    const id = req.params.Id
    const Mobile = await eventService.getEvent();
    if (!Mobile) {
      throw new Error("Please Providde UserId!");
    }
    await eventService.deleteEvent(id)

    res.status(200).json({
      success: true,
      message: (`Mobile Successfully delete`)
    });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


const updateEvent = async (req, res) => {
  try {
    const mobileId = req.params.Id;

    const cateExists = await eventService.getEventById(mobileId);
    if (!cateExists) {
      throw new Error("Mobile not found!");
    }

    await eventService.updateDetails(mobileId, req.body);

    res.status(200).json({
      success: true,
      message: "Mobile details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createEvent, getEvent, deleteEvent, updateEvent };


