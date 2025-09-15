# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Tazto is a Flutter e-commerce mobile application featuring a dual-role architecture supporting both customers and sellers. The app uses Provider for state management and includes customer shopping features (browsing, cart, orders) and seller management features (dashboard, products, orders).

## Development Commands

### Setup and Installation
```bash
# Install Flutter dependencies
flutter pub get

# Run the app on connected device/emulator
flutter run

# Run on specific device
flutter devices
flutter run -d <device-id>

# Hot reload during development (r key when app is running)
# Hot restart (R key when app is running)
```

### Building
```bash
# Build APK for Android
flutter build apk

# Build app bundle for Google Play Store
flutter build appbundle

# Build for iOS (requires macOS)
flutter build ios

# Build for development/debugging
flutter build apk --debug
flutter build ios --debug
```

### Testing and Quality Assurance
```bash
# Run all tests
flutter test

# Run specific test file
flutter test test/unit/customer_provider_test.dart

# Run tests with coverage
flutter test --coverage

# Analyze code for issues
flutter analyze

# Format code
dart format .

# Check for outdated dependencies
flutter pub outdated
```

### Development Tools
```bash
# Launch Flutter DevTools
flutter pub global activate devtools
flutter pub global run devtools

# Run with hot reload enabled
flutter run --hot

# Run in release mode
flutter run --release

# Clean build artifacts
flutter clean && flutter pub get

# Flutter upgrade (update Flutter SDK)
flutter upgrade

# Flutter doctor (diagnose Flutter installation)
flutter doctor
```

## Architecture Overview

### Core Structure
- **Dual Role System**: The app supports both customer and seller interfaces with role-based navigation
- **Provider Pattern**: Uses Flutter Provider for state management across the application
- **Model-View-Provider Architecture**: Clear separation between data models, UI screens, and business logic

### Key Architectural Components

#### State Management (Provider Pattern)
- `CustomerProvider` - Manages products, cart, orders, and user data for customers
- `SellerProvider` - Handles seller-specific functionality 
- `LoginProvider` & `RegisterProvider` - Authentication state management
- All providers are registered globally in `main.dart` using `MultiProvider`
- Providers handle API calls, data transformations, and business logic

#### Role-Based Navigation
- `CustomerLayout` - Bottom navigation with Home, Search, Cart, Orders, Profile
- `SellerLayout` - Bottom navigation with Dashboard, Products, Orders, Settings
- `RoleToggle` - Custom animated toggle widget for switching between customer/seller roles
- Navigation is managed within each role-specific layout

#### Data Layer
- **Customer Models**: `User`, `Product`, `CartItem`, `Order`, `Address`, `Category`, `Rating`
- **Seller Models**: `Product`, `Order`, `Store` (with different properties than customer models)
- API integration using HTTP client to fetch products from external API (currently using a custom API endpoint)
- Models implement JSON serialization for API communication

#### Theme System
- Centralized theming in `lib/theme/app_theme.dart`
- Material 3 design with custom color palette
- Supports both light and dark themes
- Consistent design tokens across the app
- Theme constants defined in `AppColors` class

### Key Design Patterns
1. **Provider Pattern**: For reactive state management
2. **Repository Pattern**: Implicit through provider methods for data access
3. **Model-View-Provider**: Clear separation of concerns
4. **Factory Pattern**: Used in model constructors for JSON serialization

## Directory Structure

```
lib/
├── main.dart                 # App entry point with provider setup
├── splash_screen.dart        # Initial loading screen
├── auth/                     # Authentication screens
│   ├── login_screen.dart
│   └── signup_screen.dart
├── customer/                 # Customer-specific features
│   ├── models/              # Data models for customer domain
│   │   ├── addressMdl.dart
│   │   ├── cart_itemMdl.dart
│   │   ├── categoryMdl.dart
│   │   ├── orderMdl.dart
│   │   ├── productMdl.dart
│   │   ├── rating.dart
│   │   └── userMdl.dart
│   └── screens/             # Customer UI screens
│       ├── customer_layout.dart
│       ├── home_page.dart
│       ├── search_page.dart
│       ├── cart_page.dart
│       ├── orders_page.dart
│       ├── product_detail_page.dart
│       ├── product_list_page.dart
│       └── profile_page.dart
├── seller/                   # Seller-specific features
│   ├── models/              # Data models for seller domain
│   │   ├── orderMdl.dart
│   │   ├── productMdl.dart
│   │   └── soreMdl.dart
│   └── screens/             # Seller UI screens
│       ├── screen_layout.dart
│       ├── seller_dashboard_page.dart
│       ├── seller_orders_page.dart
│       ├── seller_products_page.dart
│       └── seller_settings_page.dart
├── providers/               # State management (Provider classes)
│   ├── customerPdr.dart
│   ├── loginPdr.dart
│   ├── sellerPdr.dart
│   └── signupPdr.dart
├── theme/                   # Centralized theming
│   └── app_theme.dart
└── helper/                  # Shared utilities and widgets
    └── roleToggle.dart
```

## Development Guidelines

### State Management
- Always use Provider for state management - avoid direct state manipulation
- Call `notifyListeners()` after state changes in providers
- Use `Consumer` or `Provider.of` to access provider data in widgets
- Initialize critical providers in `main.dart` (like CustomerProvider with `fetchProducts()`)
- Keep provider methods focused on specific functionality

### API Integration
- HTTP calls are handled in provider classes, not directly in UI
- Set loading states (`_isLoadingProducts`) before API calls
- Handle both success and error cases with proper user feedback
- Use proper error handling with try-catch blocks
- External API endpoint is configured in the provider classes

### Model Design
- All models should support JSON serialization (`fromJson`, `toJson`)
- Use immutable model classes where possible
- Keep customer and seller models separate even if similar
- Follow naming conventions for model properties

### UI Development
- Follow Material 3 design principles defined in `app_theme.dart`
- Use theme colors and text styles consistently
- Implement proper responsive design for different screen sizes
- Use proper navigation patterns (bottom navigation for main sections)
- Leverage Flutter widgets for responsive layouts

### Asset Management
- Images are stored in `assets/images/`
- All assets must be declared in `pubspec.yaml`
- Use appropriate image formats and sizes for mobile optimization
- Reference assets using the correct path format

## Key Dependencies
- **flutter**: Core framework
- **provider**: State management (^6.1.5+1)
- **http**: API communication (^1.5.0)
- **google_fonts**: Typography (^6.3.1)
- **cupertino_icons**: iOS-style icons

## Testing Strategy
- Unit tests should focus on provider logic and model methods
- Widget tests for individual UI components
- Integration tests for complete user flows (login, purchase, etc.)
- Mock HTTP calls for testing API-dependent functionality
- Create test fixtures for consistent test data

## Common Development Patterns

### Adding New Features
1. Create model classes in appropriate `models/` directory
2. Add business logic to relevant provider
3. Create UI screens in `screens/` directory
4. Update navigation in layout files
5. Add proper error handling and loading states

### Provider Updates
- Always use `notifyListeners()` after state changes
- Implement loading states for async operations
- Handle errors gracefully with user-friendly messages
- Keep providers focused on single responsibilities

### Navigation Flow
- Authentication → Role Selection → Role-specific Layout
- Use `Navigator.pushReplacement` for main navigation transitions
- Bottom navigation handles tab switching within roles

## Debugging Tips
- Use Flutter DevTools for debugging UI and performance issues
- Set breakpoints in provider methods to track state changes
- Monitor API calls using the network inspector
- Check the Flutter logs for error messages
- Use `print` statements for quick debugging (remove before production)