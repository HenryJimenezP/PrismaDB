const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Woopa 4' },
        update: {},
        create: {
          name: 'Woopa 4',
                  username: 'ajolonauta4',
                  mission: 'Java'
        },
      });

      const woopa5 = await prisma.explorer.upsert({
        where: { name: 'Woopa 5' },
        update: {},
        create: {
          name: 'Woopa 5',
                  username: 'ajolonauta5',
                  mission: 'Node'
        },
      });

      const woopa6 = await prisma.explorer.upsert({
        where: { name: 'Woopa 6' },
        update: {},
        create: {
          name: 'Woopa 6',
                  username: 'ajolonauta6',
                  mission: 'Java'
        },
      });

      const woopa7 = await prisma.explorer.upsert({
        where: { name: 'Woopa 7' },
        update: {},
        create: {
          name: 'Woopa 7',
                  username: 'ajolonauta7',
                  mission: 'Node'
        },
      });

      const mission1 = await prisma.mission.upsert({
        where: { name: 'Mission Node' },
        update: {},
        create: {
          name: 'Mission Node',
          lang: 'Javascript',
          missionCommander: 'Carlo Gilmar',
          enrollments: 600
        },
      });

      const mission2 = await prisma.mission.upsert({
        where: { name: 'Mission Java' },
        update: {},
        create: {
          name: 'Mission Java',
          lang: 'Java',
          missionCommander: 'Fernanda Ochoa',
          enrollments: 500
        },
      });

      const mission3 = await prisma.mission.upsert({
        where: { name: 'Mission FrontEnd' },
        update: {},
        create: {
          name: 'Mission FrontEnd',
          lang: 'HTML',
          missionCommander: 'Rodrigo',
          enrollments: 400
        },
      });

      // missionCommander
      const missionCommander1 = await prisma.missionCommander.upsert({
        where: { name: 'Carlo Gilmar' },
        update: {},
        create: {
          name: 'Carlo Gilmar',
          username: 'carloInnovaccion',
          mainStack: 'Elixir',
          currentEnrollment: true
        },
      });

      const missionCommander2 = await prisma.missionCommander.upsert({
        where: { name: 'Fernanda Ochoa' },
        update: {},
        create: {
          name: 'Fernanda Ochoa',
          username: 'fernandaInnovaccion',
          mainStack: 'Java',
          currentEnrollment: false
        },
      });

    console.log('Create 7 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();