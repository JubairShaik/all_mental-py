import { featuresConfig } from "@/config/marketing";
import { H2, SectionWrapper } from "../typography";

export const FeaturesSection = async () => {
  return (
    <SectionWrapper inverted>
      <H2>{featuresConfig.description}</H2>
      <div className="mx-auto grid gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {featuresConfig.features.map((feature, index) => (
          <div className="flex h-[180px] flex-col rounded-md p-6" key={index}>
            <div className="space-y-2">
              <div className="inline-flex space-x-4">
                {feature.icons &&
                  feature.icons.map((Icon, index) => (
                    <div key={index}>
                      <Icon className="w-4 h-4" />
                    </div>
                  ))}
              </div>
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
