# MyCubit Generator Extension

This extension lets you easily generate Cubit, State, and Widget files for Flutter using a predefined Cubit architecture pattern.

## Features

- Right-click on a folder → **MyCubit: Create New Cubit** command.
- Automatically generates:
  - Cubit Class (`*_cubit.dart`)
  - State Class (`*_state.dart`)
  - Widget File (`*_widget.dart`)
- Uses external templates from `/templates` folder.

## How to Use

1. Right-click any folder in your project.
2. Select **MyCubit: Create New Cubit**.
3. Enter the Cubit name (e.g., `Product`).
4. Files will be created inside the selected folder.

## File Structure Example

/lib/
/features/
/product/
product_cubit.dart
product_state.dart
product_widget.dart


## Requirements

- Dart / Flutter project using `flutter_bloc` & `equatable`.

## Extension Settings

No settings required.

## Known Issues

None.

## Release Notes

### 0.0.1

- Initial release with Cubit/State/Widget file generation.

---

**Enjoy using the extension!**
