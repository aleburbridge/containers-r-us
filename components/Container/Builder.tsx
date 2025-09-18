import { BuilderBlockComponent, withChildren } from "@builder.io/react";
import { BuilderElement, type Component } from "@builder.io/sdk";

import { Container as BaseContainer, ContainerProps } from "./Container";
import { ContainerContainment } from "./enums";

interface BuilderContainerProps extends ContainerProps {
	builderBlock?: BuilderElement;
}

export const builderContainer = withChildren(
	({
		containment,
		className,
		builderBlock,
		...otherProps
	}: BuilderContainerProps) => {
		console.table(builderBlock);
        console.log("OTHER PROPS ARE ", otherProps)
		return (
			<BaseContainer
				containment={containment}
				className={className}
				{...otherProps}
			>
				{(builderBlock?.children || []).map((block) => {
					return (
						<BuilderBlockComponent key={block.id} block={block} />
					);
				})}
			</BaseContainer>
		);
	},
);

export const builderContainerConfig: Component = {
	name: "Container",
	canHaveChildren: true,
	defaultChildren: [],
	inputs: [
		{
			name: "containment",
			friendlyName: "Containment",
			type: "string",
			defaultValue: ContainerContainment.adaptive,
			enum: [
				ContainerContainment.adaptive,
				ContainerContainment.fluid,
				ContainerContainment.breakout,
				ContainerContainment.fullWidth,
			],
			helperText: "How the container should handle width and containment",
		},
		{
			name: "className",
			friendlyName: "CSS Class",
			type: "string",
			helperText: "Additional CSS classes",
		},
	],
};
