import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import {
  SvgIconsInterface,
  SvgService,
} from '../../../core/services/svg.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, RouterLink, NavigationComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  svg!: SvgIconsInterface;

  constructor(private SVG: SvgService) {
    this.svg = this.SVG.loadSvg();
  }
}
