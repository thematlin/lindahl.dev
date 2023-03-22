import "./App.css";
import ReactTerminal from "react-terminal-component";
import {
  EmulatorState,
  OutputFactory,
  Outputs,
  FileSystem,
  CommandMapping,
  defaultCommandMapping,
} from "javascript-terminal";

function App() {
  const defaultState = EmulatorState.createEmpty();
  const defaultOutputs = defaultState.getOutputs();

  const newOutputs = Outputs.addRecord(
    defaultOutputs,
    OutputFactory.makeTextOutput(`,----------------,              ,---------,
    ,-----------------------,          ,"        ,"|
  ,"                      ,"|        ,"        ,"  |
 +-----------------------+  |      ,"        ,"    |
 |  .-----------------.  |  |     +---------+      |
 |  |                 |  |  |     | -==----'|      |
 |  |  ALL YOU NEED   |  |  |     |         |      |
 |  |  CAN BE FOUND   |  |  |/----|\`---=    |      |
 |  |     HERE!       |  |  |   ,/|==== ooo |      ;
 |  |                 |  |  |  // |(((( [33]|    ,"
 |  \`-----------------'  |," .;'| |((((     |  ,"
 +-----------------------+  ;;  | |         |,"
    /_)______________(_/  //'   | +---------+
___________________________/___  \`,
/  oooooooooooooooo  .o.  oooo /,   \\,"-----------
/ ==ooooooooooooooo==.o.  ooo= //   ,\`\\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
\`-----------------------------'`)
  );

  const aboutContent = `I've been working as a software developer for over a decade in a wide range of
projects and roles. Industries such as Retail, Travel, Mobile Technology,
iGaming, Game Development and more. My passions lies with code and working
with like-minded people towards same goals. I have experience working with
both backend and frontend technologies - I have experience in systems created
in .NET, Javascript/Node.JS, Java, CSS/HTML, MessageQueues, HTTP/Rest APIs, 
WebSockets, Ruby, Python and much more.`;

  const socialsContent = `I'm not overly active on social platforms, easiest is to reach out to me
email. But feel free to try the other socials if you wish!
- mattias@lindahl.dev
- https://www.linkedin.com/in/mattlikescode
- https://www.twitter.com/thematlin
- https://www.instagram.com/thematlin`;

  const customFileSystem = FileSystem.create({
    "/about": { content: aboutContent, canModify: false },
    "/socials": { content: socialsContent, canModify: false },
  });

  const customCommandMapping = CommandMapping.create({
    ...defaultCommandMapping,
    help: {
      function: () => {
        const helpText = OutputFactory.makeTextOutput(
          "You can use 'ls' and 'cat <file>' to find out more about me."
        );

        return {
          output: helpText,
        };
      },
      optDef: {},
    },
  });

  const emulatorState = defaultState
    .setOutputs(newOutputs)
    .setFileSystem(customFileSystem)
    .setCommandMapping(customCommandMapping);

  return (
    <div className="App">
      <ReactTerminal emulatorState={emulatorState} />
    </div>
  );
}

export default App;
