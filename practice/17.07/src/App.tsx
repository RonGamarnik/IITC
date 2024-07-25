import Imgradio from "./components/imgradio";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import Alertdialogex2 from "./components/ui/alertdialogex2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alertdialogex2 />
          <Accordion type="multiple" >
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
          </AccordionItem>
            <AccordionItem value="item-2">
    <AccordionTrigger>Is This the best site evevr</AccordionTrigger>
    <AccordionContent>
      Yes. no site can match us.
    </AccordionContent>
          </AccordionItem>
            <AccordionItem value="item-3">
    <AccordionTrigger>why choose us</AccordionTrigger>
    <AccordionContent>
      Because we are the best in our Job,no one can match us.
    </AccordionContent>
          </AccordionItem>
        </Accordion>
      </header>
      <Imgradio/>
    </div>
  );
}

export default App;
