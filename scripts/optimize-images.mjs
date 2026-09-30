import fs from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';

const projectImagesDirectory =
    path.resolve(
        'src/assets/images/projects',
    );

const formatSize = (bytes) =>
    `${(bytes / 1024).toFixed(0)} Ko`;

async function optimizeProjectImages() {
    const files =
        await fs.readdir(
            projectImagesDirectory,
        );

    const pngFiles =
        files.filter((file) =>
            file
                .toLowerCase()
                .endsWith('.png'),
        );

    console.log(
        '\nOptimisation des images projets...\n',
    );

    for (const file of pngFiles) {
        const inputPath =
            path.join(
                projectImagesDirectory,
                file,
            );

        const outputFile =
            file.replace(
                /\.png$/i,
                '.webp',
            );

        const outputPath =
            path.join(
                projectImagesDirectory,
                outputFile,
            );

        await sharp(inputPath)
            .webp({
                quality: 82,
                effort: 6,
            })
            .toFile(outputPath);

        const inputStats =
            await fs.stat(inputPath);

        const outputStats =
            await fs.stat(outputPath);

        const reduction =
            (
                100 -
                (
                    outputStats.size /
                    inputStats.size
                ) *
                100
            ).toFixed(1);

        console.log(
            `${file}`,
        );

        console.log(
            `  ${formatSize(
                inputStats.size,
            )} → ${formatSize(
                outputStats.size,
            )}`,
        );

        console.log(
            `  -${reduction}%\n`,
        );
    }
}

async function optimizeLogo() {
    const inputPath =
        path.resolve(
            'src/assets/images/logo-rdigit.png',
        );

    const outputPath =
        path.resolve(
            'src/assets/images/logo-rdigit.webp',
        );

    console.log(
        '\nOptimisation du logo...\n',
    );

    await sharp(inputPath)
        .resize({
            width: 360,
            withoutEnlargement: true,
        })
        .webp({
            quality: 88,
            effort: 6,
        })
        .toFile(outputPath);

    const inputStats =
        await fs.stat(inputPath);

    const outputStats =
        await fs.stat(outputPath);

    console.log(
        `logo-rdigit.png`,
    );

    console.log(
        `  ${formatSize(
            inputStats.size,
        )} → ${formatSize(
            outputStats.size,
        )}`,
    );
}

async function run() {
    try {
        await optimizeProjectImages();
        await optimizeLogo();

        console.log(
            '\n✅ Optimisation terminée.',
        );
    } catch (error) {
        console.error(
            '\n❌ Erreur :',
            error,
        );

        process.exit(1);
    }
}

run();