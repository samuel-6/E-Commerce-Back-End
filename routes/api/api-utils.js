const getAllInc = (model, toInclude, res) => {

    model.findAll({
        
        include: toInclude

    })
    .then(dbData => res.json(dbData))
    .catch(err => {

        console.log(err);
        res.status(500).json(err);

    });

}

const getOneInc = (model, toInclude, selectedId, res) => {

    model.findOne({

        where: {

            id: selectedId,

        },
        include: toInclude

    })
    .then(dbData => {

        if(!dbData) {

            res.status(404).json({message: `${model.name} couldn't be found`});
            return;

        }
        res.json(dbData);

    })
    .catch(err => {

        console.log(err);
        res.status(500).json(err);

    });

}

const addNewModel = (model, updateArgs, res) => {

    model.create(updateArgs)
    .then(dbData => {

        if(!dbData) {

            res.status(404).json({message: `${model.name} couldn't be found`});
            return;

        }
        res.status(200).json(dbData);

    })
    .catch(err => {

        console.log(err);
        res.status(500).json(err);

    });

}

const editModelById = (model, updateArgs, idToUpdate, res) => {

    model.update(

        updateArgs,
        {

            where: {

                id: idToUpdate

            }

        }

    )
    .then(dbData => {

        if(!dbData[0]) {

            res.status(404).json({message: `${model.name} couldn't be found`});
            return;

        }
        res.json(dbData);

    })
    .catch(err => {

        console.log(err);
        res.status(500).json(err);

    });

}

const deleteModelById = (model, idToDelete, res) => {

    model.destroy(

        {

            where: {

                id: idToDelete

            }

        }

    )
    .then(dbData => {

        if(!dbData) {

            res.status(404).json({message: `${model.name} couldn't be found`});
            return;

        }

        res.status(200).json({ message: `${model.name} successfully deleted` });

    })
    .catch(err => {

        console.log(err);
        res.status(500).json(err);

    });

}

module.exports = {getAllInc, getOneInc, addNewModel, editModelById, deleteModelById};