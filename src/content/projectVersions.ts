import { ProjectNames, ProjectSlugs, VPProjectType } from '~/enums';
import { VPProjectDetails } from '~/types';

export const smartFood: VPProjectDetails = new VPProjectDetails({
  slug: ProjectSlugs.SmartFood,
  name: ProjectNames.SmartFood,
  type: VPProjectType.Script,
});

// Extensions

export const roesba: VPProjectDetails = new VPProjectDetails({
  slug: ProjectSlugs.Roesba,
  name: ProjectNames.Roesba,
  type: VPProjectType.Extension,
  tag: '1.6.3',
  releaseDate: new Date('2024-09-21'),
});

export const leobit: VPProjectDetails = new VPProjectDetails({
  slug: ProjectSlugs.Leobit,
  name: ProjectNames.Leobit,
  type: VPProjectType.Extension,
  tag: '1.0.0',
  releaseDate: new Date('2024-04-10'),
});

// Software

export const welnessAdministration: VPProjectDetails = new VPProjectDetails({
  slug: ProjectSlugs.WelnessProAdminitration,
  name: ProjectNames.WellnessProAdministration,
  type: VPProjectType.Software,
});

export const allProjectDetails: VPProjectDetails[] = [smartFood, roesba, leobit, welnessAdministration];
