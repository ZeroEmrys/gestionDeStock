import { Controller, Body, Post, Delete, Param, Res, HttpStatus, Get } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CategorielDTO } from './dto/categorie.dto';

@Controller('categorie')
export class CategorieController {
    constructor(private categorieService: CategorieService){}

    @Post()
    async ajoutCategorie(@Body() ctDTOFromBody: CategorielDTO){
    const addedMat =  await this.categorieService.ajoutCategorie(ctDTOFromBody);
    // return res.status(HttpStatus.OK).json({
    //     message: 'materiel ajouter',
    //     materiels: addedMat,
    // });
    return addedMat;
    }

    @Get()
    async affichageCategorie(){
        const afficherC = await this.categorieService.afficherCategorie();
        return afficherC;
    }

    @Delete(':id')
    async effacerMateriel(@Param() idASupr, @Res() response){
        const suprMat = this.categorieService.supprimerMonCategorie(idASupr.id);
        return response.status(HttpStatus.OK).json({
            message: 'suppr vita',
            materiel: suprMat,
        });
    }
}