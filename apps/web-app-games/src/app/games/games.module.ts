import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GamesComponent } from './games.component';
import { remoteRoutes } from './games.routes';
import { SafeUrlPipe } from '../shared/safe-url.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FloatingGameModule } from '../floating-game/floating-game.module';
import { KazaamModule } from '@kazaam';

@NgModule({
    declarations: [GamesComponent, SafeUrlPipe],
    imports: [KazaamModule, FloatingGameModule, HttpClientModule, CommonModule, RouterModule.forChild(remoteRoutes)],
    providers: [],
})
export class GamesModule {}
