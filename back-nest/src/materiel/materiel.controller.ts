import { MaterielService } from './materiel.service';
import { MaterielDTO } from './dto/materiel.dto';
import { Controller, Post, Body, Res, HttpStatus, Get, Param, Put, Query, Delete } from '@nestjs/common';

@Controller('materiel')
export class MaterielController{
    constructor(private materielService: MaterielService){}

// constructeur pour l'ajout de materiel en relation avec le service
    @Post()
     ajoutMateriel(@Res() res, @Body() materielDTOFromBody: MaterielDTO){
        const addedMat =  this.materielService.ajoutMateriel(materielDTOFromBody);
        return res.status(HttpStatus.OK).json({
            message: 'materiel ajouter',
            materiels: addedMat,
        });
    }

// constructeur pour l'affichage de materiel en relation avec le service
    @Get()
    async affichageMateriel(){
        const afficherMat = this.materielService.aficherMateriel();
        return afficherMat;
    }

// constructeur pour l'affichage de materiel en relation avec le service
    @Get(':idMat')
    async affichageUnMateriel(@Param() param){
        const afficherUnMat = this.materielService.afficherUnMateriel(param.idMat);
        return afficherUnMat;
    }

    @Put(':idMat')
    async ajourMateriel(@Res() response, @Param() param, @Body() newMat: MaterielDTO){
        const updatedMat = this.materielService.updateMonMateriel(param.idMat, newMat);
        return response.status(HttpStatus.OK).json({
            message: 'update tsara',
            materiel: updatedMat,
        });
    }

    @Delete(':id')
    async effacerMateriel(@Param() idASupr, @Res() response){
        const suprMat = this.materielService.supprimerMonMateriel(idASupr.id);
        return response.status(HttpStatus.OK).json({
            message: 'suppr vita',
            materiel: suprMat,
        });
    }
}
