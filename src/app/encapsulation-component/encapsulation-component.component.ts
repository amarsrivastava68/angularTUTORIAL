import { Component, ViewEncapsulation } from '@angular/core';

/**
 * Component demonstrating Angular View Encapsulation.
 * 
 * View Encapsulation determines how styles defined in a component are scoped and applied.
 * This component uses ViewEncapsulation.Emulated (the default), which simulates shadow DOM
 * behavior by adding unique attribute selectors to component styles, preventing style leakage
 * to other components while still allowing global styles to affect the component.
 * 
 * @example
 * // Usage in parent component
 * <app-encap-demo></app-encap-demo>
 * 
 * @remarks
 * ViewEncapsulation options:
 * - ViewEncapsulation.Emulated (default): Simulates shadow DOM using attribute selectors.
 *   Styles are scoped to the component but do not use native shadow DOM.
 * - ViewEncapsulation.ShadowDom: Uses native shadow DOM for true style encapsulation.
 *   Requires browser support and provides strongest isolation.
 * - ViewEncapsulation.None: No encapsulation. Styles are global and can affect other components.
 *   Useful for shared/global styling but risk of style conflicts.
 * 
 * The component displays a red background with blue text heading.
 */
@Component({
  selector: 'app-encap-demo',
  template: `<h1>Hello Encapsulation</h1>`,
  styles: [`h1 { background-color: red; color : blue}`],
  encapsulation: ViewEncapsulation.ShadowDom // default
})
export class EncapDemoComponent {


}
