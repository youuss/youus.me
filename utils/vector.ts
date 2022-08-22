/**
 * @Description
 * @Author youus
 * @Date 2022/8/21 22:51
 * @Version v1.0.0
 *
 * Hello, humor
 */

export const r15 = Math.PI / 12
export const r180 = Math.PI
export const r90 = Math.PI / 2

export function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
  const dx = r * Math.cos(theta)
  const dy = r * Math.sin(theta)
  return [x + dx, y + dy]
}
