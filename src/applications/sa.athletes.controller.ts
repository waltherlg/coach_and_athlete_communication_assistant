import { Controller, HttpCode, Post } from "@nestjs/common";

@Controller('sa/athletes')

export class SaAthletesController{

    @Post()
    async saCreateAthlete(){
        const newAtlete = { name: 'newName' }
        return newAtlete
    }

}