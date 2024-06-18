import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']  // Note: styleUrls should be used instead of styleUrl
})
export class HomescreenComponent implements AfterContentInit {
  typedTextSpan: HTMLElement | null = null;
  cursorSpan: HTMLElement | null = null;
  textArray: string[] = ["Kishan Vaghamashi", "Web Developer"];
  typingDelay: number = 200;
  erasingDelay: number = 100;
  newTextDelay: number = 2000; // Delay between current and next text
  textArrayIndex: number = 0;
  charIndex: number = 0;

  ngAfterContentInit(): void {
    // Delay to ensure content is loaded
    setTimeout(() => {
      // Initialize the DOM elements
      this.typedTextSpan = document.querySelector(".typed-text");
      this.cursorSpan = document.querySelector(".cursor");

      // Start typing effect
      if (this.textArray.length) {
        this.type();
      }
    }, 500);
  }

  type = () => {
    if (this.charIndex < this.textArray[this.textArrayIndex].length) {
      if (!this.cursorSpan?.classList.contains("typing")) {
        this.cursorSpan!.classList.add("typing");
      }
      this.typedTextSpan!.textContent += this.textArray[this.textArrayIndex].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(this.type, this.typingDelay);
    } else {
      this.cursorSpan!.classList.remove("typing");
      setTimeout(this.erase, this.newTextDelay);
    }
  }

  erase = () => {
    if (this.charIndex > 0) {
      if (!this.cursorSpan!.classList.contains("typing")) {
        this.cursorSpan!.classList.add("typing");
      }
      this.typedTextSpan!.textContent = this.textArray[this.textArrayIndex].substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(this.erase, this.erasingDelay);
    } else {
      this.cursorSpan!.classList.remove("typing");
      this.textArrayIndex++;
      if (this.textArrayIndex >= this.textArray.length) {
        this.textArrayIndex = 0;
      }
      setTimeout(this.type, this.typingDelay + 1100);
    }
  }
}
