const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Cors
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
  });

  app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
  });

  app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
  });

  app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

// Mission
app.get('/mission', async (req, res) => {
  const allMission =  await prisma.mission.findMany({});
  res.json(allMission);
});

app.get('/mission/:id', async (req, res) => {
  const id = req.params.id;
  const idMission = await prisma.mission.findUnique({where: {id: parseInt(id)}});
  res.json(idMission);
});

app.post('/mission', async (req, res) => {
  const newMission = {
    name: req.body.name,
    lang: req.body.lang,
    missionCommander: req.body.missionCommander,
    enrollments: req.body.enrollments
   };
  const message = 'Mission creado.';
  await prisma.mission.create({data: newMission});
  return res.json({message});
});

app.put('/mission/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.mission.update({
		where: {
			id: id
		},
		data: {
			enrollments: req.body.enrollments
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/mission/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.mission.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

// missionCommander
app.get('/missionCommander', async (req, res) => {
  const allMissionCommnader =  await prisma.missionCommander.findMany({});
  res.json(allMissionCommnader);
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});