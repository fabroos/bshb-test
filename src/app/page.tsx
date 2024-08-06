import {PageView} from "./sarasa";

import {Button} from "@/components/ui/button";
import {Pump} from ".basehub/react-pump";

export default function HomePage() {
  return (
    <div>
      <Pump
        queries={[
          {
            sarasa: {
              title: true,
              _analyticsKey: true,
            },
          },
        ]}
      >
        {async ([{sarasa}]) => {
          return (
            <div>
              <PageView _analyticsKey={sarasa._analyticsKey} />
              <h1>{sarasa.title}</h1>
              <Button>Click me</Button>
            </div>
          );
        }}
      </Pump>
    </div>
  );
}
