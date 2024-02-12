import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

const readData = async (): Promise<any[]> => {
    try {
        const fileName = 'data.json';
        const filePath = `${Directory.ExternalStorage}/${fileName}`;
        const { data  } = await Filesystem.readFile({
            path: filePath,
            directory: Directory.ExternalStorage,
            encoding: Encoding.UTF8,
        });

        return data ? JSON.parse(data as string) : [];
    } catch (error) {
        console.error('Erreur lors de la lecture du fichier : ', error);
        throw error; // Propager l'erreur
    }
};
const writeFile = async (listData: any): Promise<void> => {
    try {
        const fileName = 'data.json';
        const filePath = `${Directory.ExternalStorage}/${fileName}`;

        let existingData: any[];

        try {
            existingData = await readData();
        } catch (readError) {
            console.error('Erreur lors de la lecture des données : ', readError);
            existingData = [];
        }

        existingData.push(listData);
        const jsonData = JSON.stringify(existingData);

        await Filesystem.writeFile({
            path: filePath,
            data: jsonData,
            directory: Directory.ExternalStorage,
            encoding: Encoding.UTF8,
        });

        console.log('Fichier écrit avec succès');

        // Renvoie une promesse résolue pour indiquer la fin de l'écriture
        return Promise.resolve();
    } catch (error) {
        console.error('Erreur lors de l\'écriture du fichier : ', error);
        throw error;
    }
};


const addFilmListItem = async (listData: any, index: number): Promise<void> => {
    try {
        const fileName = 'data.json';
        const filePath = `${Directory.ExternalStorage}/${fileName}`;

        let existingData: any[];

        try {
            existingData = await readData();
        } catch (readError) {
            console.error('Erreur lors de la lecture des données : ', readError);
            existingData = [];
        }

        existingData.push(listData);
        const jsonData = JSON.stringify(existingData);

        await Filesystem.writeFile({
            path: filePath,
            data: jsonData,
            directory: Directory.ExternalStorage,
            encoding: Encoding.UTF8,
        });

        console.log('Fichier écrit avec succès');

        // Renvoie une promesse résolue pour indiquer la fin de l'écriture
        return Promise.resolve();
    } catch (error) {
        console.error('Erreur lors de l\'écriture du fichier : ', error);
        throw error;
    }
}
const deleteFilmListItem = async (indexToDelete: number): Promise<void> => {
    try {
        const fileName = 'data.json';
        const filePath = `${Directory.ExternalStorage}/${fileName}`;

        let existingData: any[];

        try {
            existingData = await readData();
        } catch (readError) {
            console.error('Erreur lors de la lecture des données : ', readError);
            existingData = [];
        }

        const updatedData = existingData.filter((_, index) => index !== indexToDelete);

        const jsonData = JSON.stringify(updatedData);

        await Filesystem.writeFile({
            path: filePath,
            data: jsonData,
            directory: Directory.ExternalStorage,
            encoding: Encoding.UTF8,
        });

        console.log('Élément supprimé avec succès');
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'élément : ', error);
        throw error; // Propager l'erreur pour une meilleure gestion des erreurs
    }

}
const deleteListItem = async (indexToDelete: number): Promise<void> => {
    try {
        const fileName = 'data.json';
        const filePath = `${Directory.ExternalStorage}/${fileName}`;

        let existingData: any[];

        try {
            existingData = await readData();
        } catch (readError) {
            console.error('Erreur lors de la lecture des données : ', readError);
            existingData = [];
        }

        const updatedData = existingData.filter((_, index) => index !== indexToDelete);

        const jsonData = JSON.stringify(updatedData);

        await Filesystem.writeFile({
            path: filePath,
            data: jsonData,
            directory: Directory.ExternalStorage,
            encoding: Encoding.UTF8,
        });

        console.log('Élément supprimé avec succès');
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'élément : ', error);
        throw error; // Propager l'erreur pour une meilleure gestion des erreurs
    }
};


export { readData, writeFile, deleteListItem, addFilmListItem, deleteFilmListItem };
