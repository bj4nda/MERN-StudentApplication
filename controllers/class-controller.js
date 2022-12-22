 const Classes = require('../models/Classes');

 const getClass = async(req, res, next) => {
    
    try {
        const {id} = req.params;
        const classes = await Classes.findById(id);
        res.json(classes);

    } catch (error) {
        res.status(500).json(error);
        
    }
}

 const updateClass = async (req, res) => {
    
    try {
        const { title, strength, noOfAllowedStudents, currentStudents } = req.body;
        const newClasses = new Classes({
            title,
            strength,
            noOfAllowedStudents,
            currentStudents
        });
       let savedClass = await newClasses.save();
       res.status(201).json({success:true, data: newClasses });
       
    } catch (err) {
       res.status(400).json({success: false, message:err.message});
    }
 };


exports.updateClass = updateClass;
exports.getClass = getClass;


