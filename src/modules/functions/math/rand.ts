import prand from "pure-rand";

export function rand(min: number, max: number, seed: number): number {
  return prand.uniformIntDistribution(
    min,
    max
  )(prand.xoroshiro128plus(seed))[0];
}
