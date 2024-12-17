
const prisma = require('../utils/prismaClient');

async function addTags(req, res) {
    try {
        const data = req.body;
        const tag  = await prisma.tag.create({data});
        res.status(200).json({message : 'tags added succesfully'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}



const getTags = async (req, res) => {
    try {
        const tags = await prisma.tag.findMany();
        res.status(200).json(tags);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
}


async function getTagsById (req, res){
    try {
        const id = req.params.id;
        const tag = await prisma.tag.findUnique({where: {id}});
        res.status(200).json(tag);
        } catch (error) {
            res.status(500).json({error: error.message})
        }

}

// catigories
async function addCategory(req, res){
    try {
        const data = req.body;
        const category = await prisma.category.create({data});
        res.status(200).json({message : 'category added succesfully'})
        } catch (error) {
            res.status(500).json({error: error.message})
            }
}
async function getCategory(req, res){
    try {
        const category = await prisma.category.findMany();
        res.status(200).json(category);
        } catch (error) {
            res.status(500).json({error: error.message})
            }

}
async function addCategoryById(req, res){
    try {
        const id = req.params.id;
        const category = await prisma.category.findUnique({where: {id}});
        res.status(200).json(category);
        } catch (error) {
            res.status(500).json({error: error.message})
            }
}
async function updateCategory(req, res){
    try {
        const id = req.params.id;
        const data = req.body;
        const category = await prisma.category.update({where: {id}, data});
        res.status(200).json({message : 'category updated succesfully'})
        } catch (error) {
            res.status(500).json({error: error.message})
            }
}
async function deleteCategory(req, res){
    try {
        const id = req.params.id;
        const category = await prisma.category.delete({where: {id}});
        res.status(200).json({message : 'category deleted succesfully'})
        } catch (error) {
            res.status(500).json({error: error.message})
            }   
}



module.exports = {
    addTags,
    getTags,
    getTagsById,
    addTagsById,
    updateTags,
}