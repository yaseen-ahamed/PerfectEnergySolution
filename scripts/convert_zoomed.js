import sharp from 'sharp';
import path from 'path';

const targetDir = "C:\\Users\\Yasin\\Desktop\\Anitgravity\\Perfect ES\\public";

const files = [
    { src: 'networking_solutions_zoomed.png', dest: 'networking_solutions_zoomed.webp' },
    { src: 'cctv_security_zoomed.png', dest: 'cctv_security_zoomed.webp' },
    { src: 'electrical_services_zoomed.png', dest: 'electrical_services_zoomed.webp' },
    { src: 'sim_services_zoomed.png', dest: 'sim_services_zoomed.webp' },
];

async function convert() {
    for (const file of files) {
        const sourcePath = path.join(targetDir, file.src);
        const targetPath = path.join(targetDir, file.dest);
        try {
            await sharp(sourcePath)
                .webp({ quality: 80 })
                .toFile(targetPath);
            console.log(`Converted ${file.src} to ${file.dest}`);
        } catch (e) {
            console.error(`Error converting ${file.src}`, e);
        }
    }
}

convert();
