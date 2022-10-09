import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator'

@Component({
  template: `<button @click="clicked">You clicked me {{ count }} times.</button>`
})
export class ButtonCounter extends Vue {
  @Prop({ default: 0 }) count: number = 0;

  @Emit() clicked() { }
}