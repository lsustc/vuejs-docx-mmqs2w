import Vue from "vue";
import { Component } from "vue-property-decorator";
import { ButtonCounter } from "./button-counter.component";

import { saveAs } from "file-saver";
import { Packer } from "docx";
import { experiences, education, skills, achievements } from "./cv-data";
import { DocumentCreator } from "./cv-generator";

@Component({
  components: { ButtonCounter },
  template: `
    <div>
      <h1>Simple VueJs Typescript Starter</h1>
      <ul>
        <li>VueJs 2</li>
        <li>Typescript</li>
        <li>Vue Property Decorator</li>
      </ul>

      <h2>Button Component</h2>
      <button-counter
        @clicked="onButtonClicked"
        :count="count"
      ></button-counter>
      <button @click="generate">Generate my CV with docx!</button>
    </div>
  `
})
export class App extends Vue {
  count = 0;
  public onButtonClicked(val): void {
    this.count++;
  }

  public generate(): void {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
      experiences,
      education,
      skills,
      achievements
    ]);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }
}
