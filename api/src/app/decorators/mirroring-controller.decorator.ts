import { applyDecorators, Controller } from '@nestjs/common';
import type { ControllerOptions } from '@nestjs/common';

export const MirroringController = (options: ControllerOptions = {}): ClassDecorator => {
  const root = 'dist';
  let calculatedPath: string | string[] = options.path;

  if (typeof options.path === 'string') {
    calculatedPath = options.path.split(root)[1];
  }

  return applyDecorators(Controller({ ...options, path: calculatedPath }));
};
