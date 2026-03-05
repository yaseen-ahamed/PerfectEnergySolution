import sharp from 'sharp';
import path from 'path';

const sourceDir = "C:\\Users\\Yasin\\.gemini\\antigravity\\brain\\79996e7d-d801-46e7-bcfb-ecfe10b3a370";
const targetDir = "C:\\Users\\Yasin\\Desktop\\Anitgravity\\Perfect ES\\public";

const files = [
    { src: 'hero_banner_1772712841009.png', dest: 'hero_banner.webp' },
    { src: 'electronics_repair_1772712855903.png', dest: 'electronics_repair.webp' },
    { src: 'networking_solutions_1772712871746.png', dest: 'networking_solutions.webp' },
    { src: 'cctv_security_1772712886699.png', dest: 'cctv_security.webp' },
    { src: 'electrical_services_1772712902748.png', dest: 'electrical_services.webp' },
    { src: 'tech_support_1772712918419.png', dest: 'tech_support.webp' },
    { src: 'sim_services_1772712933727.png', dest: 'sim_services.webp' },
];

async function convert() {
    for (const file of files) {
        const sourcePath = path.join(sourceDir, file.src);
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
