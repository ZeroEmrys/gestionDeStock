import { Controller, Post, Body, Get, Param, HttpStatus, Res, Delete } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeDTO } from './dto/type.dto';

@Controller('type')
export class TypeController {
    constructor(private typeService: TypeService){}

    @Post()
    async ajoutCategorie(@Body() ctDTOFromBody: TypeDTO){
    const addedMat =  await this.typeService.ajoutType(ctDTOFromBody);
    // return res.status(HttpStatus.OK).json({
    //     message: 'materiel ajouter',
    //     materiels: addedMat,
    // });
    return addedMat;
    }

    @Get()
    async affichageType(){
        const afficherC = await this.typeService.afficherType();
        return afficherC;
    }

    @Get(':id')
    async affichageCategorieById(@Param() p){
        const afficherC = await this.typeService.afficherTypebyId(p.id);
        return afficherC;
    }

    @Delete(':id')
    async effacerMateriel(@Param() idASupr, @Res() response){
        const suprMat = this.typeService.supprimerMonType(idASupr.id);
        return response.status(HttpStatus.OK).json({
            message: 'suppr vita',
            materiel: suprMat,
        });
    }

}
