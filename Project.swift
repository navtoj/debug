import ProjectDescription

let project = Project(
    name: "1Demo",
    targets: [
        .target(
            name: "1Demo",
            destinations: .macOS,
            product: .app,
            bundleId: "io.tuist.1Demo",
            infoPlist: .default,
            sources: ["1Demo/Sources/**"],
            resources: ["1Demo/Resources/**"],
            dependencies: []
        ),
        .target(
            name: "1DemoTests",
            destinations: .macOS,
            product: .unitTests,
            bundleId: "io.tuist.1DemoTests",
            infoPlist: .default,
            sources: ["1Demo/Tests/**"],
            resources: [],
            dependencies: [.target(name: "1Demo")]
        ),
    ]
)
